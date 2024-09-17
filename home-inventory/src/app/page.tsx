import { db } from "~/server/db";

// https://www.youtube.com/watch?v=d5x0JCZbAJs

const images = [
  "https://utfs.io/f/7DYqzYMs9DwIIGloZ8O74rx3j0VEHlW8kYSQowCPnvKfGRAy",
  "https://utfs.io/f/7DYqzYMs9DwIvsiMmdhcAsHtC8dPQrkauDLRXzpVUg0SJK3l",
  "https://utfs.io/f/7DYqzYMs9DwIMMYldAGbYm9LiI3altwoJWQUB72CTqjH6zSA",
  "https://utfs.io/f/7DYqzYMs9DwIsNDYgqxlbUfGLvKR83Tlkoih2BgHumcPa5pO",
];

const mockImages = images.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            {" "}
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
