import * as React from 'react';

type ListProps = {
  data?: ListItem[]
}

type ListItem = {
  avatarUrl?: string;
  title: string;
  subTitle: string;
}

const List: React.FC<ListProps> = ({
  data
}) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      {
        data.map((item) => {
          const { title, subTitle, avatarUrl } = item;
          return (
            <div className="grid grid-cols-5">
              <div className="flex justify-center items-center">
                <div className="avatar">
                  <div className="mb-8 rounded-full w-10 h-10">
                    <img src={avatarUrl} alt=""/>
                  </div>
                </div>
              </div>
              <div className="flex col-span-4">
                
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

