export default function importImages(r) {
  let images = [];
  r.keys().map((item) => {
    images.push(r(item));
  });
  
  return images;
}