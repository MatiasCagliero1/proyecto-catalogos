CREATE TABLE `productos` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `productName` VARCHAR(255) NOT NULL,
   `imgUrl` VARCHAR(255) NOT NULL,
   `createDate` DATE NOT NULL,
   `UserAdderId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `comentarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `texto` VARCHAR(50),
   `fecha_comentario` DATE NOT NULL,
   `usuarios_id` INT NOT NULL,
   `productos_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Usuarios` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `apellido` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `usuario` VARCHAR(255) NOT NULL,
   `contraseña` VARCHAR(255) NOT NULL,
   `nacimiento` DATE NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `productos` ADD CONSTRAINT `FK_95407dd7-28ee-46dc-92a8-7956bc8217b5` FOREIGN KEY (`UserAdderId`) REFERENCES `Usuarios`(`id`);

ALTER TABLE `comentarios` ADD CONSTRAINT `FK_59549d28-20d0-4cd7-9199-a731eec636d4` FOREIGN KEY (`usuarios_id`) REFERENCES `Usuarios`(`id`);

ALTER TABLE `comentarios` ADD CONSTRAINT `FK_ebc754eb-4d64-445b-8845-889d7f2dc391` FOREIGN KEY (`productos_id`) REFERENCES `productos`(`id`);
