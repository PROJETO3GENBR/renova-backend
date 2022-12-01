"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Renova')
        .setDescription('Projeto Renova')
        .setContact('Renova', 'https://github.com/PROJETO3GENBR', ' projeto3genbr@outlook.com')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/swagger', app, document);
    process.env.TZ = '-03:00';
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(4000);
    await app.listen(process.env.PORT || 4000);
}
bootstrap();
//# sourceMappingURL=main.js.map