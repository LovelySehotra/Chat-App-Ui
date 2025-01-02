function Chats({ props }) {
    const [searchMessage, setSearchMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [foundMessages, setFoundMessages] = useState([]);
    const [actionMenu, setActionMenu] = useState({
        visible: false,
      });
      const [count, setCount] = useState(0);
      const RChatBody = useRef(null);
      useEffect(() => {
        RChatBody?.current?.classList.add("scroll-smooth");
        RChatBody?.current?.scrollTo(0, RChatBody.current.scrollHeight);
      }, [props.messageLoading]);
    return (
        <div className="flex flex-col w-full h-full relative overflow-hidden">
            {
                props?.isSearchVisible && (
                    <div className="absolute left-0 p-2 dark:bg-bunker-920/60 bg-bunker-200/70 sm:p-2 w-full z-20 flex justify-between items-center animate-fade-in backdrop-blur-md">



                        <div className="dark:bg-bunker-920 bg-bunker-50 backdrop-blur-mds p-1 w-full sm:p-3 rounded-lg flex justify-between items-center">
                            <input
                                className="bg-transparent p-1 text-bunker-800 dark:text-bunker-100 outline-none w-[8pc] sm:text-base text-sm"
                                placeholder="Search chat"
                                onChange={(e) => setSearchMessage(e.target.value)}
                            />
                            <div className="flex flex-row gap-2 items-center">
                                <div className="flex gap-2 text-bunker-800 dark:text-bunker-100 text-sm">
                                    <p>{chatMessages.length}</p>
                                    <p>of</p>
                                    <p>{foundMessages.length}</p>
                                </div>
                                <Icon variant="transparent">
                                    <MdLocationSearching
                                        onClick={handlePointMessage}
                                        className="text-lg dark:text-bunker-50 cursor-pointer"
                                    />
                                </Icon>
                            </div>
                        </div>
                    </div>
                )
            }
            {actionMenu.visible && (
        <ActionMenu
          props={props}
          RChatBody={RChatBody}
          actionMenu={actionMenu}
          setActionMenu={setActionMenu}
          SUserProfile={SUserProfile}
          handleDeleteMessage={handleDeleteMessage}
        />
      )}
        </div>
    )
}
export default Chats