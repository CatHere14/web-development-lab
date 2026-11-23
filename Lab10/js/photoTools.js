const filterByCategory = (photos, category) => {
    return photos.filter(photo => photo.category === category);
};

const photos = [
    { id: 1, title: "Sunset", category: "Nature" },
    { id: 2, title: "City", category: "Urban" },
    { id: 3, title: "Forest", category: "Nature" }
];

console.log(filterByCategory(photos, "Nature"));

const sortByLikes = (photos) => {
    return [...photos].sort((a, b) => b.likes - a.likes);
};

const likedPhotos = [
    { id: 1, title: "Sunset", likes: 12 },
    { id: 2, title: "City", likes: 5 },
    { id: 3, title: "Forest", likes: 20 }
];

console.log(sortByLikes(likedPhotos));

const searchByTitle = (photos, searchTerm) => {
    return photos.filter(photo =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

console.log(searchByTitle(likedPhotos, "sun"));
console.log(searchByTitle(likedPhotos, "CITY"));
console.log(searchByTitle(likedPhotos, "forest"));
console.log(searchByTitle(likedPhotos, "xyz"));

const getTotalLikes = (photos) => {
    return photos.reduce((total, photo) => total + photo.likes, 0);
};

console.log(getTotalLikes(likedPhotos));
console.log(getTotalLikes([]));

const getUniqueCategories = (photos) => {
    return [...new Set(photos.map(photo => photo.category))];
};

console.log(getUniqueCategories(photos));

const getMostLiked = (photos) => {
    if (photos.length === 0) {
        return null;
    }

    return photos.reduce((mostLiked, photo) =>
        photo.likes > mostLiked.likes ? photo : mostLiked
    );
};

console.log(getMostLiked(likedPhotos));
console.log(getMostLiked([]));

const getPhotosByTag = (photos, tag) => {
    return photos.filter(photo =>
        photo.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
};

const taggedPhotos = [
    { id: 1, title: "Sunset", likes: 12, tags: ["nature", "sunset"] },
    { id: 2, title: "City", likes: 5, tags: ["urban", "night"] },
    { id: 3, title: "Forest", likes: 20, tags: ["nature", "forest"] }
];

console.log(getPhotosByTag(taggedPhotos, "nature"));
console.log(getPhotosByTag(taggedPhotos, "NATURE"));
console.log(getPhotosByTag(taggedPhotos, "urban"));
console.log(getPhotosByTag(taggedPhotos, "xyz"));

const removeById = (photos, id) => {
    return photos.filter(photo => photo.id !== id);
};
console.log(removeById(photos, 2));
console.log(removeById(photos, 1));
console.log(removeById(photos, 999));