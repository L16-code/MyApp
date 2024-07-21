import env from "../../env.json";
// import env
interface IEnvConfig {
    mongoURL: string;
    host: string;
    port: number;
    secretKey: string;
}

const EnvConfig = (): IEnvConfig => {
    const nodeEnv = (process.env.NODE_ENV as keyof typeof env) || "local";

    return env[nodeEnv];
};

export default EnvConfig;