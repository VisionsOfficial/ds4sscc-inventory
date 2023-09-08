import { PropsWithChildren } from "react";
import Styles from "./VisionAndPrinciples.module.scss";

type VisionAndPrinciplesProps = {};

export const VisionAndPrinciples =
  ({}: PropsWithChildren<VisionAndPrinciplesProps>) => {
    return (
      <div className={Styles.VisionAndPrinciples}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          explicabo dolores maiores necessitatibus provident odit, fuga officia
          eos quis magni perferendis officiis repellat asperiores ullam
          accusantium, culpa, harum libero iste!
        </p>
        <img src="#" alt="placeholder" className="img-placeholder" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          sapiente assumenda a corrupti ducimus asperiores exercitationem illum
          necessitatibus neque ea iste amet quidem magnam, fuga impedit quaerat
          saepe voluptatem recusandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          laboriosam, modi cum voluptate delectus nemo, qui quaerat nisi harum
          cupiditate quam accusamus officiis consectetur. Ut ipsam nobis rem a
          ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Debitis facilis, cumque doloremque repellendus aliquam, similique
          libero dolorum cum alias magni esse enim! Rem quam dolores suscipit
          similique reprehenderit, officiis unde.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
          placeat! Laboriosam eveniet error iste? Quam ullam autem perspiciatis
          asperiores, quasi officia soluta id repudiandae. Cupiditate nihil
          laudantium quos laboriosam explicabo. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Obcaecati unde mollitia at nihil,
          quisquam dicta repellat natus? Nihil, molestias voluptatem distinctio
          odio, ea sed dolore sequi aspernatur, architecto expedita adipisci!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad possimus
          eveniet voluptate dolorum! Aspernatur unde amet sit! Dolores, aperiam
          voluptate, laboriosam amet, quisquam nostrum voluptates quasi ad modi
          eaque molestias.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          aperiam placeat quam nemo quidem nam, quo at! Esse, a deserunt?
          Ducimus architecto, natus ut porro maxime animi mollitia perspiciatis
          sint.
        </p>
      </div>
    );
  };
