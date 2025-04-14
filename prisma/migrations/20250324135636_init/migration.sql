-- Create the HerbalMedicine table
CREATE TABLE `HerbalMedicine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `benefits` VARCHAR(191) NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create the Aromatherapy table
CREATE TABLE `Aromatherapy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `essentialOil` VARCHAR(191) NOT NULL,
    `uses` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create the TraditionalHealing table with updated columns
CREATE TABLE `TraditionalHealing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `technique` VARCHAR(191) NOT NULL,
    `culture` VARCHAR(191) NOT NULL,
    `healingMethod` VARCHAR(191) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usageIdeas` TEXT,  -- Removed the default value
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
