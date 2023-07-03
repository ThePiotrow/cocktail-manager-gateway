import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import InitSwagger from './config/swagger.config';
import { RpcExceptionFilter } from './exceptions/rpc-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  InitSwagger(app);
  // app.useGlobalFilters(new RpcExceptionFilter(app.get(HttpAdapterHost)));
  await app.listen(3000);
}
bootstrap();
