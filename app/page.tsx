// ไม่มี "use client"
import { PrismaClient } from "@prisma/client";

interface Art {
  id: number;
  art_name: string;
  description: string;
  owner: string;
  pic: string;
}

export default async function Page() {
  const prisma = new PrismaClient();
  const arts = await prisma.art_app_cloud.findMany(); // ต้องใช้ model ที่ถูกต้อง

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-200 via-yellow-100 to-green-200 p-8">
      <h1 className="text-7xl font-bold text-center text-purple-400 mb-10">
        Art app on cloud
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {arts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative w-full h-64">
              <img
                src={item.pic}
                alt={item.art_name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.art_name}
              </h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-gray-500 text-xs mt-1">
                เจ้าของ: {item.owner}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
