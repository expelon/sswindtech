import { cn } from "@/lib/utils"
import Image from "next/image"

interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp: Date
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-3 max-w-[80%] animate-fade-in",
        isUser ? "ml-auto flex-row-reverse" : "flex-row"
      )}
    >
      {isUser ? (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium shrink-0">
          U
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 bg-white border-2" style={{ borderColor: '#395674' }}>
          <Image
            src="/logo1.png"
            alt="SS Wind Tech Logo"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div
        className={cn(
          "rounded-2xl px-4 py-2 break-words",
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-gray-100 text-gray-900 rounded-bl-sm"
        )}
      >
        <p className="text-sm whitespace-pre-line">{message}</p>
        <p className="text-xs mt-1 opacity-70">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  )
}
