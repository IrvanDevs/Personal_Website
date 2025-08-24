function SocialLink({icon: Icon, link, text}) {
  return (
    <div className='SocialLink-container'>
        <a href={link} target='_Blank' className='flex items-center gap-3 hover:opacity-90'> <Icon className='mb-0.5' /> {text}</a>
    </div>
  );
}

export default SocialLink;
