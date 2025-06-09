import styled, { useTheme } from "styled-components";
import { H3, Text } from "../../components/common";
import { useState } from "react";

type Tag = "all" | "bestSeller" | "new" | "pandora" | "one-way";

type ProductImage = {
  src: string;
  name: string;
  price: number;
  tags: Tag[];
  soldOut?: boolean;
};

const productImageList: ProductImage[] = [
  {
    src: "./products/product-1.png",
    name: "Helvetica 01",
    price: 139.0,
    tags: ["bestSeller"],
  },
  {
    src: "./products/product-2.png",
    name: "Inter 37",
    price: 129.0,
    tags: ["bestSeller"],
  },
  {
    src: "./products/product-3.png",
    name: "Helvetica 02",
    price: 129.0,
    tags: ["bestSeller"],
  },
  {
    src: "./products/product-4.png",
    name: "Pacifico 88",
    price: 199.0,
    tags: ["new"],
    soldOut: true,
  },
  {
    src: "./products/product-5.png",
    name: "Roboto A1",
    price: 99.0,
    tags: [],
  },
  {
    src: "./products/product-6.png",
    name: "Futura 01",
    price: 159.0,
    tags: ["bestSeller"],
  },
  {
    src: "./products/product-7.png",
    name: "Futura 02-A",
    price: 159.0,
    tags: ["new"],
  },
  {
    src: "./products/product-8.png",
    name: "Futura 02-B",
    price: 149.0,
    tags: ["new"],
  },
  {
    src: "./products/product-9.png",
    name: "Futura 02-B(M)",
    price: 109.0,
    tags: ["new"],
  },
  {
    src: "./products/product-10.png",
    name: "Pacifico 99",
    price: 109.0,
    tags: [],
  },
  {
    src: "./products/product-11.png",
    name: "Courier X",
    price: 229.0,
    tags: [],
  },
  {
    src: "./products/product-12.png",
    name: "Courier Z",
    price: 229.0,
    tags: ["bestSeller"],
    soldOut: true,
  },
  {
    src: "./products/product-13.png",
    name: "판도라 - PNDR A010",
    price: 399.0,
    tags: ["pandora"],
  },
  {
    src: "./products/product-14.png",
    name: "판도라 - PNDR A(G)",
    price: 499.0,
    tags: ["pandora"],
  },
  {
    src: "./products/product-15.png",
    name: "판도라 - PNDR B02",
    price: 499.0,
    tags: ["pandora"],
  },
  {
    src: "./products/product-16.png",
    name: "Oxygen 31",
    price: 119.0,
    tags: ["one-way"],
    soldOut: true,
  },
  {
    src: "./products/product-17.png",
    name: "Oxygen 41",
    price: 119.0,
    tags: ["one-way", "new"],
  },
  {
    src: "./products/product-18.png",
    name: "Oxygen 51",
    price: 119.0,
    tags: ["bestSeller", "one-way"],
  },
];

const tagInfoList: Record<Tag, { title: string; description: string }> = {
  all: {
    title: "전체 보기",
    description: "inTone의 모든 제품을 한눈에 확인해 보세요.",
  },
  bestSeller: {
    title: "베스트셀러",
    description: "지금 가장 인기가 많은 제품을 확인해 보세요.",
  },
  new: {
    title: "신제품",
    description: "새롭게 출시된 제품을 만나보세요.",
  },
  pandora: {
    title: "판도라",
    description: "판도라 컬렉션의 독특한 제품들을 확인해 보세요.",
  },
  "one-way": {
    title: "원웨이",
    description: "한쪽으로도 충분, 원웨이 제품의 특별한 매력을 경험해 보세요.",
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const TitleCard = styled.div`
  justify-items: center;
  margin-bottom: 100px;
`;

const ProductCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 64px;
`;

const ProductCard = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const TagButton = styled.div<{ selected?: boolean }>`
  background-color: ${({ selected, theme }) => selected && theme.button};
  color: ${({ selected, theme }) => (selected ? theme.text : theme.border)};
  border: ${({ selected, theme }) => !selected && `1px solid ${theme.border}`};
  padding: 6px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.4;
`;

const TagList = styled.div`
  display: flex;
  gap: 9px;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 48px;
`;

function Store() {
  const [selectedTag, setSelectedTag] = useState<Tag>("all");

  const { mode } = useTheme();
  const isDisabled = mode === "dark";

  const filteredProducts = productImageList.filter(
    (product) => selectedTag === "all" || product.tags.includes(selectedTag)
  );

  return (
    <Wrapper>
      <TagList>
        {Object.entries(tagInfoList).map(([tag, { title }]) => (
          <TagButton
            selected={tag === selectedTag}
            onClick={() => setSelectedTag(tag as Tag)}
          >
            {title}
          </TagButton>
        ))}
      </TagList>
      <TitleCard>
        <H3>{tagInfoList[selectedTag].title}</H3>
        <Text>{tagInfoList[selectedTag].description}</Text>
      </TitleCard>

      <ProductCardList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.name} disabled={isDisabled}>
            <img src={product.src} alt={product.name} width="200px" />
            <Text>{product.name}</Text>
            <Text>
              {product.soldOut ? "Sold out" : `$${product.price.toFixed(2)}`}
            </Text>
          </ProductCard>
        ))}
      </ProductCardList>
    </Wrapper>
  );
}

export default Store;
