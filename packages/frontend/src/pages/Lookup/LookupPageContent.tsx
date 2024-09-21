
import { CardImageDisplay } from "components/CardImageDisplay/CardImageDisplay";
import { MobileFilterForm } from "components/MobileFilterForm/MobileFilterForm";
import { Modal } from "components/Modal/Modal";
import { SelectedCardDisplay } from "components/SelectedCardDisplay/SelectedCardDisplay";
import { Sidebar } from "components/Sidebar/Sidebar";
import { StatDisplay } from "components/StatDisplay/StatDisplay";
import { useLookupContext } from "context/LookupContext/LookupContext"
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT, SIDEBAR_WIDTH } from "globalConstants";

export const LookupContent = () => {
  const { isMobile, filterFormOpen, selectedCard, setSelectedCard } = useLookupContext();

  return (
    <div className="CenteredContent" style={{ height: window.innerHeight }}>
      {!isMobile && <Sidebar />}
      <div
        style={{
          paddingLeft: isMobile ? 0 : SIDEBAR_WIDTH,
          paddingTop: isMobile ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT
        }}
      >
        <div className="Body">
          <StatDisplay />
          <CardImageDisplay />
        </div>
      </div>

      {isMobile && filterFormOpen ? (
          <MobileFilterForm />
        ) : (
            <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
              <SelectedCardDisplay />
            </Modal>
        )}
    </div>
  )
}
