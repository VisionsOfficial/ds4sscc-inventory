import { PropsWithChildren } from "react";
import Styles from "./CatalogueOfSpecifications.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { Projects } from "../../components/organisms/Projects/Projects";
import { DropdownCard } from "../../components/molecules/Cards/DropdownCard/DropdownCard";
import { MaturityCategory } from "../../components/atoms/Texts/MaturityCategory/MaturityCategory";
import { SectionTitleContainer } from "../../components/molecules/Containers/SectionTitleContainer/SectionTitleContainer";

type CatalogueOfSpecificationsProps = {};

export const CatalogueOfSpecifications =
  ({}: PropsWithChildren<CatalogueOfSpecificationsProps>) => {
    return (
      <main className={Styles.CatalogueOfSpecifications}>
        <HeaderPage category="catalogueOfSpecifications" subInfoHeader />

        <section className={Styles.projects}>
          <DropdownCard
            title="Explanation gor the MIMs, the scope and the types of maturity level"
            iconInfo
          >
            <SectionTitleContainer title="Relevant MIMs">
              <ul>
                <li>
                  <span>MIM 1</span>: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias, delectus necessitatibus
                  architecto corrupti at nulla nostrum, voluptates aliquam dicta
                  saepe, alias nesciunt?
                </li>
                <li>
                  <span>MIM 2</span>: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias, delectus necessitatibus
                  architecto corrupti at nulla nostrum, voluptates aliquam dicta
                  saepe, alias nesciunt?
                </li>
                <li>
                  <span>MIM 3</span>: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias, delectus necessitatibus
                  architecto corrupti at nulla nostrum, voluptates aliquam dicta
                  saepe, alias nesciunt?
                </li>
                <li>
                  <span>MIM 4</span>: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias, delectus necessitatibus
                  architecto corrupti at nulla nostrum, voluptates aliquam dicta
                  saepe, alias nesciunt?
                </li>
                <li>
                  <span>MIM 5</span>: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Molestias, delectus necessitatibus
                  architecto corrupti at nulla nostrum, voluptates aliquam dicta
                  saepe, alias nesciunt?
                </li>
              </ul>
            </SectionTitleContainer>

            <SectionTitleContainer title="Scope">
              <ul>
                <li>
                  <span>Generic purpose</span>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Aspernatur fuga placeat modi
                  repellat in ex eligendi sapiente unde error id!
                </li>
                <li>
                  <span>Domain specific</span>: Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Numquam aspernatur quod nobis.{" "}
                </li>
              </ul>
            </SectionTitleContainer>

            <SectionTitleContainer title="Maturity">
              <ul>
                <li>
                  <MaturityCategory maturity="quiteMature" colorDot />: Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
                <li>
                  <MaturityCategory maturity="evolving" colorDot />: Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
                <li>
                  <MaturityCategory maturity="fewMature" colorDot />: Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                  consequatur, at sunt aspernatur suscipit dolorum amet quo
                </li>
              </ul>
            </SectionTitleContainer>
          </DropdownCard>

          <Projects />
        </section>
      </main>
    );
  };
