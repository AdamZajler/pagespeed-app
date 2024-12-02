-- CreateTable
CREATE TABLE "User" (
    "id" CHAR(16) NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(128) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" CHAR(16) NOT NULL,
    "userId" CHAR(16) NOT NULL,
    "apiKey" VARCHAR(64) NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" CHAR(16) NOT NULL,
    "userId" CHAR(16) NOT NULL,
    "provider" VARCHAR(64) NOT NULL,
    "type" VARCHAR(256) NOT NULL,
    "refreshToken" VARCHAR(256) NOT NULL,
    "accessToken" VARCHAR(256) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "tokenType" VARCHAR(256) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" CHAR(16) NOT NULL,
    "userId" CHAR(16),
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" CHAR(16) NOT NULL,
    "userId" CHAR(16) NOT NULL,
    "name" VARCHAR(64) NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Url" (
    "id" CHAR(16) NOT NULL,
    "domainId" CHAR(16) NOT NULL,
    "collectionId" CHAR(16) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" CHAR(16) NOT NULL,
    "urlId" CHAR(16),
    "performance" INTEGER NOT NULL,
    "accessibility" INTEGER NOT NULL,
    "bestPractices" INTEGER NOT NULL,
    "seo" INTEGER NOT NULL,
    "coreVitals" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Config_userId_key" ON "Config"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_userId_key" ON "Account"("userId");

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_domainId_fkey" FOREIGN KEY ("domainId") REFERENCES "Domain"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Url" ADD CONSTRAINT "Url_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "Url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
