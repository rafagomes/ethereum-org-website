import { FaGithub } from "react-icons/fa"
import {
  Box,
  BoxProps,
  calc,
  Icon,
  List,
  ListItem,
  Show,
  useToken,
} from "@chakra-ui/react"

import type { ToCItem } from "@/lib/interfaces"

import { ButtonLink } from "@/components/Buttons"
import ItemsList from "@/components/TableOfContents/ItemsList"
import Mobile from "@/components/TableOfContents/TableOfContentsMobile"

import { outerListProps } from "@/lib/utils/toc"

// TODO: Re-enable after i18n implemented
// import Translation from "@/components/Translation"
import { useActiveHash } from "@/hooks/useActiveHash"

export interface IProps extends BoxProps {
  items: Array<ToCItem>
  maxDepth?: number
  slug?: string
  editPath?: string
  hideEditButton?: boolean
  isMobile?: boolean
}

const TableOfContents: React.FC<IProps> = ({
  items,
  maxDepth = 1,
  slug,
  editPath,
  hideEditButton = false,
  isMobile = false,
  ...rest
}) => {
  // TODO: Replace with direct token implementation after UI migration is completed
  const lgBp = useToken("breakpoints", "lg")

  const titleIds: Array<string> = []

  if (!isMobile) {
    const getTitleIds = (items: Array<ToCItem>, depth: number): void => {
      // Return early if maxDepth hit
      if (depth > maxDepth) return
      items?.forEach(({ url, items }) => {
        titleIds.push(url)
        items && getTitleIds(items, depth + 1)
      })
    }

    getTitleIds(items, 0)
  }

  const activeHash = useActiveHash(titleIds)

  if (!items) {
    return null
  }
  if (isMobile) {
    return <Mobile items={items} maxDepth={maxDepth} />
  }

  return (
    <Show above={lgBp}>
      <Box
        as="aside"
        position="sticky"
        top="7.25rem" // Account for navbar
        p={4}
        pe={0}
        maxW="25%"
        minW={48}
        height={calc.subtract("100vh", "80px")}
        overflowY="auto"
        {...rest}
      >
        <List {...outerListProps}>
          {!hideEditButton && editPath && (
            <ListItem mb={2}>
              <ButtonLink
                leftIcon={<Icon as={FaGithub} />}
                href={editPath}
                variant="outline"
              >
                {/* <Translation id="edit-page" /> */}
                Edit page
              </ButtonLink>
            </ListItem>
          )}
          <ListItem>
            <Box mb={2} textTransform="uppercase">
              {/* <Translation id="on-this-page" /> */}
              On this page
            </Box>
            <List m={0}>
              <ItemsList
                items={items}
                depth={0}
                maxDepth={maxDepth ? maxDepth : 1}
                activeHash={activeHash}
              />
            </List>
          </ListItem>
        </List>
      </Box>
    </Show>
  )
}

export default TableOfContents
