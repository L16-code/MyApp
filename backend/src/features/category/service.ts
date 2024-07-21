import { IUsersSchema, UserModel } from "./model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import EnvConfig from "../../config/envConfig";
import { IUserLogin } from "./interface";
const response: {
    message: string;
    data?: unknown;
    success: boolean;
} = { message: "", success: false };
class UserService {
    async AddUser(data:IUsersSchema){
        const {name, email, password}=data;
        const existingUser = await UserModel.findOne({email});
            if (existingUser) {
                response.success = false;
                response.message = "User already exists";
                return response;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new UserModel({
                name,
                email,
                password: hashedPassword,
            });
            const res = await user.save();
            if (res) {
                response.success = true;
                response.message = "User registered successfully";
                response.data = '';

            } else {
                response.success = false;
                response.message = "User not registered";
                response.data = '';

            }
        return response;
    }
    async userLogin(LoginData: IUserLogin) {
        const { email, password } = LoginData;
        const user = await UserModel.findOne({ email });
            if (user) {
                const validPassword = await bcrypt.compare(password, user.password);
                if (validPassword) {
                    const env = EnvConfig();
                    const SecretKey = env.secretKey;
                    // generate the jwt token
                    const token = jwt.sign({ userEmail: user.email, UserId:user._id }, process.env.JWT_SECRET || SecretKey, {
                        expiresIn: '7d',
                    });
                    response.success = true;
                    response.message = "User logged in successfully";
                    response.data = {

                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            token: token,
                        },
                    };
                } else {
                    response.success = false;
                    response.message = "Invalid password";
                    response.data = '';
                }
            } else {
                response.success = false;
                response.message = "User not found";
                response.data = '';
            }
            return response;
    }
}
export default new UserService