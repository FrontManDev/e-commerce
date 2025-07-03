-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ONLINE', 'OFFLINE', 'BLOCK');

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Image" TEXT NOT NULL,
    "Role" "UserRole" NOT NULL DEFAULT 'USER',
    "Status" "UserStatus" NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DeliverAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "OrdersId" TEXT NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Price" DOUBLE PRECISION NOT NULL,
    "Description" TEXT NOT NULL,
    "CategoryId" TEXT NOT NULL,
    "ImageId" TEXT NOT NULL,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "Full_Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Message" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "CreateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_Email_key" ON "Users"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Notifications_Email_key" ON "Notifications"("Email");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_OrdersId_fkey" FOREIGN KEY ("OrdersId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_ImageId_fkey" FOREIGN KEY ("ImageId") REFERENCES "Images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
