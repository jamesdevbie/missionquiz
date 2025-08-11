import { Header } from '../Header/Header'
import SpinWheel from '../SpinWheel/SpinWheel'

const Home = () => {
  return (
    <>
      <Header />
      <SpinWheel
        options={[
          'Opt 1',
          'Opt 2',
          'Opt 3',
          'Opt 4',
          'Opt 5',
          'Opt 6',
          'Opt 7',
          'Opt 8',
          'Opt 9',
          'Opt 10',
          'Opt 11',
          'Opt 12',
        ]}
      />
    </>
  )
}

export default Home
