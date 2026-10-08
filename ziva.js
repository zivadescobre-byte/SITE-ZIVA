const produtos = [
      {
        nome: "Organizador giratório de temperos",
        categoria: "Cozinha",
        descricao: "Organizador preto com frascos horizontais e tampas dosadoras. Confira os detalhes e condições no anúncio.",
        imagem: "organizador-temperos.svg",
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

                Ver achado no Mercado Livre

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