
import { InputLabel } from 'components/FilterForm/shared/InputLabel/InputLabel'
import { useLookupContext } from 'context/LookupContext/LookupContext'

import ClassFilterButton from './ClassFilterButton'
import { classColors, classIcons } from './classData'

import './ClassFilter.css'

export const ClassFilter = () => {
  const { metadata, filter, toggleClassId } = useLookupContext();

  return (
    <div>
      <InputLabel label="CLASS" />
      <div className="ClassFilter">
        {metadata?.classes?.map((hsClass) => (
          <ClassFilterButton
            key={'ClassFilterButton-' + hsClass.slug}
            hsClass={hsClass}
            imageSrc={classIcons[hsClass.slug]}
            borderColor={classColors[hsClass.slug]}
            selected={filter.classIds && filter.classIds.has(hsClass.id)}
            darkened={
              filter.classIds.size > 0 &&
              !filter.classIds.has(hsClass.id)
            }
            onClick={() => toggleClassId(hsClass.id)}
          />
        ))}
      </div>
    </div>
  )
}
