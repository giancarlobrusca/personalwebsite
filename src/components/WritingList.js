"use client";

const articles = [
  {
    title: "Remilia, Milady y la nueva internet",
    date: "2024",
    pub: "421.news",
    url: "https://www.cuatroveintiuno.com/remilia-milady-charlotte-fang-nueva-internet/",
  },
];

export default function WritingList() {
  return (
    <div style={{ padding: "80px 60px" }}>
      <div className="fade-in" style={{ marginBottom: "48px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          {"// Escritura"}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.5rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--text)",
            marginTop: "8px",
          }}
        >
          Artículos
        </h2>
      </div>
      <div className="fade-in">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-item"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 0",
              borderBottom: "1px solid var(--border)",
              transition: "padding-left 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.paddingLeft = "16px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.paddingLeft = "0";
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <span
                className="writing-date"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--muted)",
                  minWidth: "60px",
                }}
              >
                {article.date}
              </span>
              <span
                className="writing-title"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  fontStyle: "italic",
                  color: "var(--text)",
                }}
              >
                {article.title}
              </span>
            </div>
            <span
              className="writing-pub"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--muted)",
              }}
            >
              {article.pub}
            </span>
          </a>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .writing-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px;
          }
          .writing-date {
            font-size: 0.75rem !important;
          }
          .writing-pub {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
