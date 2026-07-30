export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-details">
        <div className="skeleton-text skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text small"></div>
      </div>
    </div>
  );
};