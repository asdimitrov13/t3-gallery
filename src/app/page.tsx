import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c202cdae-fd99-421c-9d1e-f439afa3132b-td1blb.JPG",
  "https://utfs.io/f/eca645e9-d5b0-44ae-bd96-873a4d193c8a-lkl2m7.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
