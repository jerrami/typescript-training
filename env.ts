export const getEnv = () => {
  return {
    host: process.env.host || 'localhost',
    port: process.env.port || 8000,
  };
};
