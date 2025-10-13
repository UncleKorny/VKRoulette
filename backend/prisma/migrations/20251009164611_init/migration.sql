-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prize" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "probability" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Prize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "prizeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Spin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Spin" ADD CONSTRAINT "Spin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spin" ADD CONSTRAINT "Spin_prizeId_fkey" FOREIGN KEY ("prizeId") REFERENCES "Prize"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
