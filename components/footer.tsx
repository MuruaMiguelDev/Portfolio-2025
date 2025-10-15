export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} desarrollado por MigueDev.
          </p>

          <p className="text-sm text-muted-foreground">
            Hecho con <span className="text-(--destructive-foreground)">♥</span> en Córdoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
