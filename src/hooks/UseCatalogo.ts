export default function useCatalogo() {
  /**
   *LIDAR COM O ALUGUEL
   * @param message
   * @param whatsApp
   */
  function handleRent(
    id: string = "",
    msg: string = "Olá! Quero reservar um brinquedo!",
    whatsappNumber: string = "5521968968795"
  ) {
    window.open(
      `https://wa.me/${encodeURIComponent(
        whatsappNumber
      )}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  }

  return { handleRent };
}
