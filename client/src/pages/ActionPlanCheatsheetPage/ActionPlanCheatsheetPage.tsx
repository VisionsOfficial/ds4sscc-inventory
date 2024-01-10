import { PropsWithChildren, useRef, useState } from "react";
import Styles from "./ActionPlanCheatsheetPage.module.scss";
import { HeaderPage } from "../../components/molecules/Headers/HeaderPage/HeaderPage";
import { ActionPlanCheatsheetTable } from "../../components/molecules/Tables/ActionPlanCheatsheetTable/ActionPlanCheatsheetTable";

type ActionPlanCheatsheetPageProps = {};

export const ActionPlanCheatsheetPage =
  ({}: PropsWithChildren<ActionPlanCheatsheetPageProps>) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStartX(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStartX;

      if (containerRef.current) {
        containerRef.current.scrollLeft -= deltaX;
      }

      setDragStartX(e.clientX);
    };
    return (
      <main className={Styles.ActionPlanCheatsheetPage}>
        <HeaderPage category="actionPlanCheatsheet" />

        <section
          className={Styles.content}
          ref={containerRef}
          onMouseDown={(e: any) => {
            handleMouseDown(e);
          }}
          onMouseUp={handleMouseUp}
          onMouseMove={(e: any) => {
            handleMouseMove(e);
          }}
        >
          <ActionPlanCheatsheetTable />
        </section>
      </main>
    );
  };
