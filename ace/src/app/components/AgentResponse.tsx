type AgentResponseProps = {
  data: any,
  onAction?: (cmd: string) => void;
};

const AgentResponse = ({ data, onAction }: AgentResponseProps) => {
  if (!data) return null;

  if (data.error) {
    return (
      <p className="text-[#f38ba8]">
        {data.error}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-[#89ba4fa] font-semibold">
        {data.agent || "ACE"}
      </p>

      {data.message && (
        <p className="text-[#cdd6f4]">
          {data.message}
        </p>
      )}

      {data.primary_action && (
        <button
          className="px-3 py-1 bg-[#a6e3a1] text-black rounded text-sm"
          onClick={() => onAction?.(data.primary_action)}
        >
          {data.primary_action}
        </button>
      )}

      {typeof data.confidence === "number" && (
        <p className="text-xs text-[#9399b2]">
          confidence: {Math.round(data.confidence * 100)}%
        </p>
      )}

      {data.alternatives?.length > 0 && (
        <div className="text-sm text-[#cdd6f4]">
          Other options:
          <ul className="list-disc ml-5">
            {data.alternatives.map((alt: string) => (
              <li key={alt}>
                <button
                  className="underline text-[#89b4fa]"
                  onClick={() => onAction?.(alt)}
                >
                  {alt}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.result && (
        <pre className="text-xs text-[#bac2de] whitespace-pre-wrap">
          {typeof data.result === "string"
            ? data.result
            : JSON.stringify(data.result, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default AgentResponse;
