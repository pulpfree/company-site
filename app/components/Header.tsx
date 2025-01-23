import { useContext } from 'react'
import { Link } from 'react-router'

import clsx from 'clsx'

import { Button, Container, Logo, Logomark, RootLayoutContext } from './'

export function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!

  return (
    <Container>
      <div className='flex items-center justify-between'>
        <Link
          to='/'
          aria-label='Home'
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark className='h-8 sm:hidden' invert={invert} filled={logoHovered} />
          <Logo className='hidden h-10 sm:block' invert={invert} filled={logoHovered} />
        </Link>
        <div className='flex items-center gap-x-8'>
          <Button to='/contact' invert={invert}>
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type='button'
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-slate-950/10',
            )}
            aria-label='Toggle navigation'
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}
