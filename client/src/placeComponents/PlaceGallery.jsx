import { useState } from "react";

export default function PlaceGallery({ place }) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 min-h-screen">
                <div className="bg-black text-white grid gap-4 p-8">
                    <div>
                        <h2 className="mr-36 text-3xl">Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 bg-white text-black rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close photos
                        </button>
                    </div>
                    {place.photos.length > 0 && place.photos.map(photo => (
                        <div className="max-w-2xl">
                            <img src={"http://localhost:4000/uploads/" + photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    function photos(length) {
        return (
            <div>
                {place.photos.length > length && (
                    <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={"http://localhost:4000/uploads/" + place.photos[length]} alt=""></img>
                )}
                <div className="overflow-hidden">
                    {place.photos.length > length + 1 && (
                        <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square aspect-h-1 object-cover relative top-2" src={"http://localhost:4000/uploads/" + place.photos[length + 1]} alt=""></img>
                    )}
                </div>
            </div>
        );
    }
    return (
        <div className="relative">
            <div className="grid gap-2 grid-cols-[2fr_1fr_1fr] rounded-2xl overflow-hidden">
                <div>
                    {place.photos.length > 0 && (
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer aspect-square object-cover" src={"http://localhost:4000/uploads/" + place.photos[0]} alt=""></img>
                        </div>
                    )}
                </div>
                {photos(1)}
                {photos(3)}
            </div>
            <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                Show more photos
            </button>
        </div>
    );
}