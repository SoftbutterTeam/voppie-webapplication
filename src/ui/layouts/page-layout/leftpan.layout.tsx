interface Props {
  children: React.ReactNode;
  secondaryContent?: React.ReactNode;
}
export function LeftPanelledLayout(props: Props) {
  const { children: mainContent, secondaryContent } = props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 h-screen w-full ">
      <div className="flex flex-col justify-center items-center lg:col-span-6 px-2 relative bg-white">
        {mainContent}
      </div>
      <div className="hidden md:block md:col-span-4 ">{secondaryContent}</div>
    </div>
  );
}
//? should rename and refactor to be a login layout, so decoration associated with login content is desplayed along it.
//? and should go for a cenetred design under the main header and sorts like with vimeo/login
//todo should instead be renamed to left-leaned layout and be refactored to take in 2 components, left and right content.
