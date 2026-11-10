import FleetRow from "@/components/home/FleetRow";

export default function FleetPage({
  onCardClick,
}: {
  onCardClick?: (slug: string) => void;
}) {
  return (
    <div className="fleet-page">
      <FleetRow onCardClick={onCardClick} />
    </div>
  );
}