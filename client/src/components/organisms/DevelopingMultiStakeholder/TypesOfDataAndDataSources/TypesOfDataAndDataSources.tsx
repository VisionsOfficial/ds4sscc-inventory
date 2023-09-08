import { PropsWithChildren } from "react";
import Styles from "./TypesOfDataAndDataSources.module.scss";
import { Card } from "../../../atoms/Card/Card";
import { CheckOutCard } from "../../../molecules/Cards/CheckOutCard/CheckOutCard";

type TypesOfDataAndDataSourcesProps = {};

export const TypesOfDataAndDataSources =
  ({}: PropsWithChildren<TypesOfDataAndDataSourcesProps>) => {
    return (
      <div className={Styles.TypesOfDataAndDataSources}>
        <Card className={Styles.card}>
          <h3>Lorem ipsum</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim modi
            maiores harum! Cupiditate maxime mollitia commodi autem sunt
            blanditiis, consectetur voluptatibus natus deleniti aliquam quaerat,
            quo, doloremque non perspiciatis vel! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Rerum hic aperiam tenetur! Maxime eius
            dignissimos possimus dolore repellendus, tenetur harum modi nostrum?
            Minima quas veritatis dolorum molestias qui, molestiae ullam. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis
            asperiores pariatur magni eum dicta praesentium laudantium iusto
            explicabo modi enim alias, culpa, corporis quis, repellat amet
            aliquam sint quas et? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Animi, magnam magni in optio odio voluptate sequi
            qui distinctio quod earum aliquid. Ipsam rem perferendis ducimus
            maiores unde facilis dolorum aliquam?
          </p>
        </Card>

        <CheckOutCard category="priorityDatasets" variantColor="bgGray" />
      </div>
    );
  };
