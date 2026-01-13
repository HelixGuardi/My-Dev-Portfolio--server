import app from "./app";
import { env } from './config/env';

const startServer = async (): Promise<void> => {
  try{
    // Iniciar servidor
    app.listen(env.PORT, () => {
      console.log(`🚀Server is running on http://localhost:${env.PORT}`);
      console.log(`📝Enviroment: ${env.nodeEnv}`);
    })
  }catch(error){
    console.error('❌Error starting the server:', error);
    process.exit(1);
  }
}

startServer();