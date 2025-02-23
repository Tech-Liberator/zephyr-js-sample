import TeenyApp from "Teenyjs";

async function bootstrap(): Promise<void> {
  const app = new TeenyApp();
  await app.init();
}

bootstrap();
