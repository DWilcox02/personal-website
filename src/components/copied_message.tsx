
interface CopiedMessageProps {
    copied: string
    showMessage: boolean
}

export default function CopiedMessage({copied, showMessage}: CopiedMessageProps) {

  const message = copied;

  return (
    <div className={`fixed left-0 right-0 text-white p-4 text-center transition-all ${showMessage ? "-bottom-0" : "-bottom-20"}`}>
      <div className="bg-white text-black w-auto inline-block px-3 py-1 rounded-md">
            <div className="flex flex-row">
              <div className="underline font-bold">
                {message}
              </div>
              <div>
                &nbsp;copied to clipboard!
              </div>
            </div>
        </div>
    </div>
  );
}
