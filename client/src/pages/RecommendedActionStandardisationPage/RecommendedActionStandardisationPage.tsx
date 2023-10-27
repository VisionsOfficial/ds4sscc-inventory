import { PropsWithChildren } from "react";
import Styles from "./RecommendedActionStandardisationPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";

type RecommendedActionStandardisationPageProps = {};

export const RecommendedActionStandardisationPage =
  ({}: PropsWithChildren<RecommendedActionStandardisationPageProps>) => {
    return (
      <main className={Styles.RecommendedActionStandardisationPage}>
        <HeaderPage category="recommendedAction" />

        <div className={Styles.content}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            laudantium quibusdam, voluptates veritatis rerum aspernatur quis!
            Quidem nulla consectetur, vitae aliquid itaque consequatur
            aspernatur voluptatum! Dolorum ex consectetur voluptas mollitia.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            veritatis necessitatibus fugit repudiandae iusto laudantium dolores
            quae earum, exercitationem blanditiis nulla sapiente incidunt
            corrupti suscipit quis possimus alias commodi voluptas!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            sapiente fugiat doloribus fugit placeat ut aliquam distinctio omnis
            ipsam magni provident nulla obcaecati, corporis optio molestias
            laboriosam labore, repudiandae reprehenderit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fugit id soluta ab, temporibus
            unde deserunt iure est reprehenderit impedit recusandae facere
            tempore in suscipit debitis eligendi expedita, facilis obcaecati
            amet.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            esse, numquam quasi cupiditate doloribus reprehenderit accusamus,
            suscipit eos velit quibusdam eaque neque nesciunt ratione. Culpa
            assumenda ducimus adipisci eum velit? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Perspiciatis, similique expedita
            delectus exercitationem ea consequatur deserunt optio quod cumque
            adipisci qui omnis possimus dolor placeat eveniet, nesciunt tenetur
            ex sint! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quia voluptas impedit aliquam magni illo libero iure obcaecati!
            Placeat minus at ab ullam, corrupti necessitatibus recusandae
            libero, dolorum ea accusantium velit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quisquam voluptate iste vel
            exercitationem cum! Libero necessitatibus modi molestias ullam
            reprehenderit non delectus dicta, sunt, eaque sit, adipisci nisi
            tempora? Illum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eius delectus eos maiores corporis, aperiam dicta, laborum
            temporibus ipsam sapiente mollitia vitae modi fugit, quidem nisi
            atque aspernatur! At, pariatur nam?
          </p>
        </div>
      </main>
    );
  };
