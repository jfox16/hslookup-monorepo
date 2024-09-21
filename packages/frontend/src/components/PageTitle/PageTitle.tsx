import { useLookupContext } from "context/LookupContext/LookupContext"
import { Helmet } from "react-helmet"

export const PageTitle = () => {
  const { filterDescription } = useLookupContext();

  return (<Helmet>
    {filterDescription ? (
      <title>{`${filterDescription} | HS Lookup`}</title>
    ) : (
      <title>HS Lookup</title>
    )}
    </Helmet>
  )
}
