import Header from '../../components/Header';
import './gallery.css';
import HeaderImage from '../../images/shanni2.jpg'

const Gallery = () => {
  const galleryLength =27;
  const images = [];
  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  return (
    <>
      <Header title="မႆၫꩼတွင်းၷျꧥပ်ꩥၫင်ႍကူႍတီႍတီႍ" image={HeaderImage}>
      "Explore the rich tapestry of the Tailaing language through our captivating gallery session."
      "Dive into the vibrant world of Tailaing language as our gallery session takes you on a visual journey, showcasing its unique cultural expressions and linguistic beauty."
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image , index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery img ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}
export  default Gallery;