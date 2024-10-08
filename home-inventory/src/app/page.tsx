import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

// https://www.youtube.com/watch?v=d5x0JCZbAJs

// const mockUrls = [
//   "https://utfs.io/f/7DYqzYMs9DwIIGloZ8O74rx3j0VEHlW8kYSQowCPnvKfGRAy",
//   "https://utfs.io/f/7DYqzYMs9DwIvsiMmdhcAsHtC8dPQrkauDLRXzpVUg0SJK3l",
//   "https://utfs.io/f/7DYqzYMs9DwIMMYldAGbYm9LiI3altwoJWQUB72CTqjH6zSA",
//   "https://utfs.io/f/7DYqzYMs9DwIsNDYgqxlbUfGLvKR83Tlkoih2BgHumcPa5pO",
// ];

// const mockImages = mockUrls.map((url, index) => ({
//   id: index + 1,
//   url,
// }));

async function Images() {
  // const images = await db.query.images.findMany();
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {/* {posts.map((post) => (
    <div key={post.id}>{post.name}</div>
  ))} */}
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above.</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
