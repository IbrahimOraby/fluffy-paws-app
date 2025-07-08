function Avatar({img='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'}) {
  return (
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={img} />
        </div>
      </div>
  );
}

export default Avatar;
