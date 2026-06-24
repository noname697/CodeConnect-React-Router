import imagemNotFound from "../../assets/not-found-image.png";
import styles from "./notfound.module.css";

export const NotFound = () => {
  return (
    <main className={styles.container}>
      <img
        src={imagemNotFound}
        alt="Imagem de página não encontrada"
        className={styles.img}
      />
      <h1 className={styles.texto}>
        Vish meu padawãn, essa URL não ta no cardápio, de meia volta e tente
        novamente!
      </h1>
    </main>
  );
};
