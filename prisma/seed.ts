import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Limpar tabelas antes de inserir novos dados
    await prisma.salonService.deleteMany();
    await prisma.salon.deleteMany();
    await prisma.user.deleteMany();

    const images = [
      "https://i.ibb.co/wFmry8zX/04.png",
      "https://i.ibb.co/v4nQmL70/03.png",
      "https://i.ibb.co/SXVGYsn0/10.png",
      "https://i.ibb.co/4ZWLXL3Y/07.png",
      "https://i.ibb.co/BVRmDcnp/08.png",
      "https://i.ibb.co/SSr60xm/02.png",
      "https://i.ibb.co/v4nQmL70/03.png",
      "https://i.ibb.co/BVRmDcnp/08.png",
      "https://i.ibb.co/4ZWLXL3Y/07.png",
      "https://i.ibb.co/wFmry8zX/04.png",
      "https://i.ibb.co/SXVGYsn0/10.png",
      "https://i.ibb.co/SXVGYsn0/10.png",
      "https://i.ibb.co/SXVGYsn0/10.png",
      "https://i.ibb.co/BVRmDcnp/08.png",
      "https://i.ibb.co/v4nQmL70/03.png",
      "https://i.ibb.co/bMbv6Wzn/05.png",
      "https://i.ibb.co/v4nQmL70/03.png",
      "https://i.ibb.co/bMbv6Wzn/05.png",
      "https://i.ibb.co/bMbv6Wzn/05.png",
      "https://i.ibb.co/SSr60xm/02.png",
      "https://i.ibb.co/v4nQmL70/03.png",
    ];
    // Nomes criativos para as barbearias
    const creativeNames = [
      "Salão Vintage",
      "Corte & Estilo",
      "Cachos e Fibras",
      "The Curls",
      "Cabelo & Cia.",
      "Elegant Curls",
      "Crespas e Cacheadas",
      "Preta Doce",
      "Estilo Urbano",
      "Estilo Clássico",
    ];

    // Endereços fictícios para as barbearias
    const addresses = [
      "Rua do Salão, 123",
      "Avenida T Neves, 456",
      "Praça dos Cachos, 789",
      "Travessa do Pente, 101",
      "Alameda dos Estilos, 202",
      "Estrada da Trança, 303",
      "Avenida Elegante, 404",
      "Praça da Aparência, 505",
      "Rua Urbana, 606",
      "Avenida Clássica, 707",
    ];

    const services = [
      {
        name: "Finalização e Estilização",
        description:
          "Uso de finalizadores e óleos para selar a hidratação, reduzir o frizz e manter os cachos definidos.",
        priceInCents: 4000,
        imageUrl: "https://i.ibb.co/BVRmDcnp/08.png",
        durationMin: 5,
      },
      {
        name: "Corte e Modelagem",
        description:
          "Corte especializado que valoriza a textura natural.",
        priceInCents: 6000,
        imageUrl: "https://i.ibb.co/SSr60xm/02.png",
        durationMin: 15,
      },
      {
        name: "Reconstrução Capilar",
        description:
          "Tratamento intensivo com produtos ricos em proteínas para reparar danos e restaurar a estrutura do cabelo.",
        priceInCents: 3500,
        imageUrl: "https://i.ibb.co/q3KtWDjD/09.png",
        durationMin: 5,
      },
      {
        name: "Cronograma Capilar",
        description:
          "Rotina personalizada de hidratação, nutrição e reconstrução para fortalecer e revitalizar os fios.",
        priceInCents: 2000,
        imageUrl: "https://i.ibb.co/SXVGYsn0/10.png",
        durationMin: 5,
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        priceInCents: 5000,
        imageUrl: "https://i.ibb.co/q3KtWDjD/09.png",
        durationMin: 5,
      },
      {
        name: "Hidratação Profunda",
        description: "Hidratação profunda para cabelo.",
        priceInCents: 2500,
        imageUrl: "https://i.ibb.co/VYp3Z8J8/06.png",
        durationMin: 5,
      },
    ];

    // Dados dos proprietários dos salões
    const owners = [
      {
        name: "Maria Silva",
        email: "maria.silva@salon.com",
      },
      { name: "Ana Costa", email: "ana.costa@salon.com" },
      {
        name: "Carolina Mendes",
        email: "carolina.mendes@salon.com",
      },
      {
        name: "Juliana Rodrigues",
        email: "juliana.rodrigues@salon.com",
      },
      {
        name: "Fernanda Oliveira",
        email: "fernanda.oliveira@salon.com",
      },
      {
        name: "Beatriz Santos",
        email: "beatriz.santos@salon.com",
      },
      {
        name: "Amanda Ferreira",
        email: "amanda.ferreira@salon.com",
      },
      {
        name: "Natália Pereira",
        email: "natalia.pereira@salon.com",
      },
      {
        name: "Isadora Gomes",
        email: "isadora.gomes@salon.com",
      },
      {
        name: "Patricia Alves",
        email: "patricia.alves@salon.com",
      },
    ];

    // Criar usuários proprietários
    const createdOwners = [];
    for (const owner of owners) {
      const user = await prisma.user.create({
        data: {
          name: owner.name,
          email: owner.email,
        },
      });
      createdOwners.push(user);
    }

    // Criar 10 barbearias com nomes e endereços fictícios
    const salons: {
      id: string;
      name: string;
      address: string;
      imageUrl: string;
      ownerId: string;
      phones: string[];
      description: string | null;
    }[] = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const salon = await prisma.salon.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          ownerId: createdOwners[i].id,
          phones: ["(11) 91234-9999", "(11) 99999-1234"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
        },
      });

      for (const service of services) {
        await prisma.salonService.create({
          data: {
            name: service.name,
            description: service.description,
            priceInCents: service.priceInCents,
            durationMin: service.durationMin,
            salon: {
              connect: {
                id: salon.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      salons.push(salon);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os salões:", error);
  }
}

seedDatabase();
