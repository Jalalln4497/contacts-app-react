const ContactItemBody = ({ name, tag }) => {
  return (
    <div className="contact-item-body">
      <h4>{name}</h4>
      <p>{tag}</p>
    </div>
  );
}