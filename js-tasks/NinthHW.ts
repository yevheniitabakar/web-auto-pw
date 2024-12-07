enum SortDirection {
    ASC,
    DESC
}

type SortFunction = (arr: string[], direction: SortDirection) => string[]

const superSort: SortFunction = (arr, direction) => {
    return [...arr].sort((a, b) => {
      if (direction === SortDirection.ASC) {
        return a.localeCompare(b)
      } else {
        return b.localeCompare(a)
      }
    })
  }

  const names = ["Vlad", "Ira", "Nina", "Alex"]
  const chars = ["A", "C", "D", "B"]
console.log(superSort(names, SortDirection.ASC))
console.log(superSort(chars, SortDirection.DESC))



//Task #2
interface Dimension {
    length: number,
    width: number,
    height: number
}

enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
}

interface Parcel {
    readonly id: number,
    readonly statusName: string,
    weight: number,
    dimensions: Dimension,
    sender: string | number,
    status: PackageStatus,
    deliver(isSuccess: boolean): void,
    description?: string,
}

const item: Parcel = {
    id: 224,
    weight: 22.5,

    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost
    },

    get statusName() {
        return PackageStatus[this.status]
    }
}
    
    item.deliver(true);
    console.log(item.statusName)