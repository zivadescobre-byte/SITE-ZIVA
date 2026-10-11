const produtos = [
      {
        nome: "Kit de utensílios de silicone para cozinha",
        categoria: "Cozinha • Shopee",
        descricao: "Utensílios de silicone pretos com cabos de madeira e suporte organizador. Confira as opções do kit no anúncio.",
        imagem: "data:image/webp;base64,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",
        link: "https://s.shopee.com.br/6L57uGppZI",
        loja: "Shopee"
      },
      {
        nome: "Organizador giratório de temperos",
        categoria: "Cozinha",
        descricao: "Organizador preto com frascos horizontais e tampas dosadoras. Confira os detalhes e condições no anúncio.",
        imagem: "ziva_porta_temperos_capa.jpg",
        link: "https://meli.la/2SotgFz"
      },
      {
        nome: "Removedor de pelos de pets",
        categoria: "Pets",
        descricao: "Ferramenta reutilizável para ajudar a remover pelos de animais de roupas, sofás e móveis.",
        imagem: "Screenshot_20260923_000801_Mercado Libre.jpg",
        link: "https://meli.la/26FpfBk"
      }
    ];

    const container =
      document.getElementById(
        "productsContainer"
      );

    const search =
      document.getElementById(
        "searchInput"
      );

    const clearButton =
      document.getElementById(
        "clearSearch"
      );

    const empty =
      document.getElementById(
        "emptyMessage"
      );

    const count =
      document.getElementById(
        "productCount"
      );

    const progress =
      document.getElementById(
        "scrollProgress"
      );

    function criarCard(
      produto,
      index
    ) {

      return `

        <article class="product">

          <div class="product-image">

            <img
              src="${produto.imagem}"
              alt="${produto.nome}"
              ${index === 0 ? "fetchpriority='high'" : "loading='lazy'"}
              decoding="async"
            >

          </div>

          <div class="product-info">

            <div class="product-number">
              ACHADO ${String(index + 1).padStart(2,"0")}
            </div>

            <div class="product-category">
              ${produto.categoria}
            </div>

            <h3 class="product-name">
              ${produto.nome}
            </h3>

            <p class="product-description">
              ${produto.descricao}
            </p>

            <div class="product-action">

              <a
                class="view-button"
                href="${produto.link}"
                target="_blank"
                rel="nofollow sponsored noopener"
              >

                Ver achado na ${produto.loja || 'Mercado Livre'}

                <span>
                  →
                </span>

              </a>

              <div class="affiliate">
                Link de indicação
              </div>

            </div>

          </div>

        </article>

      `;

    }

    function renderProducts() {

      const termo =
        search.value
          .toLowerCase()
          .trim();

      const resultados =
        produtos.filter(
          produto =>

            produto.nome
              .toLowerCase()
              .includes(termo)

            ||

            produto.categoria
              .toLowerCase()
              .includes(termo)

            ||

            produto.descricao
              .toLowerCase()
              .includes(termo)
        );

      count.textContent =
        resultados.length === 1
          ? "1 descoberta"
          : `${resultados.length} descobertas`;

      clearButton.style.display =
        termo
          ? "flex"
          : "none";

      if (!resultados.length) {

        container.innerHTML = "";

        empty.style.display = "block";

        return;

      }

      empty.style.display = "none";

      container.innerHTML =
        resultados
          .map(criarCard)
          .join("");

      ativarAnimacoes();

    }

    function ativarAnimacoes() {

      const cards =
        document.querySelectorAll(
          ".product"
        );

      if (
        !("IntersectionObserver" in window)
      ) {

        cards.forEach(
          card =>
            card.classList.add("visible")
        );

        return;

      }

      const observer =
        new IntersectionObserver(

          entries => {

            entries.forEach(
              entry => {

                if (
                  entry.isIntersecting
                ) {

                  entry.target.classList.add(
                    "visible"
                  );

                  observer.unobserve(
                    entry.target
                  );

                }

              }
            );

          },

          {
            threshold: .08,

            rootMargin:
              "0px 0px -30px 0px"
          }

        );

      cards.forEach(
        (card,index) => {

          card.style.transitionDelay =
            `${Math.min(index * 55, 165)}ms`;

          observer.observe(card);

        }
      );

    }

    function clearSearch() {

      search.value = "";

      renderProducts();

      search.focus();

    }

    let ticking = false;

    function updateProgress() {

      const scrollTop =
        window.scrollY;

      const documentHeight =
        document.documentElement
          .scrollHeight
        - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      progress.style.width =
        `${percentage}%`;

      ticking = false;

    }

    window.addEventListener(
      "scroll",

      () => {

        if (!ticking) {

          window.requestAnimationFrame(
            updateProgress
          );

          ticking = true;

        }

      },

      {
        passive: true
      }

    );

    search.addEventListener(
      "keydown",

      event => {

        if (
          event.key === "Escape"
        ) {

          clearSearch();

        }

      }

    );

    document.addEventListener(
      "error",

      event => {

        if (
          event.target.tagName === "IMG"
        ) {

          event.target.style.opacity = "0";

        }

      },

      true

    );

    search.addEventListener("input", renderProducts);
    clearButton.addEventListener("click", clearSearch);

    renderProducts();