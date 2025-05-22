import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Menambahkan data produk baru
  const newProduct = await prisma.product.create({
    data: {
      name: "Tas Kulit Premium",
      description: "Tas kulit asli dengan desain elegan",
      price: 750000,
      stock: 15,
    },
  })

  console.log('Produk berhasil ditambahkan:', newProduct)
}

main()
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
