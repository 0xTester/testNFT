// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./Ownable.sol";
import "./ERC721Enumerable.sol";

contract boteros is ERC721Enumerable, Ownable {

  uint256 public constant unitPrice = 100000000000000000; // 0.10 ether
  uint256 public constant tripletPrice = 240000000000000000; // 0.24 ether
  uint256 public constant quintoPrice = 400000000000000000; // 0.4 ether

  uint256 public constant MAX_BOTEROS = 5;

  bool public saleIsActive;

  mapping (uint256 => string) private IPFS_CIDs;


  constructor() ERC721('Prueba1', 'PRB'){
      saleIsActive = true;
  }

  function mintOneBotero() external payable {
    require (saleIsActive == true, 'Sale is over');
    require (totalSupply() + 1 < MAX_BOTEROS, 'Cant mint another botero');
    require (msg.value >= unitPrice, '1 botero costs 0.10 ether');

    _mintBotero(1, msg.sender);
  }

  function _mintBotero(uint256 numberOfTokens, address sender) internal {
    for(uint i = 0; i < numberOfTokens; i++) {
        uint mintIndex = totalSupply();
        _safeMint(sender, mintIndex);
    }
  }

  function mintThreeBotero() external payable {
    require (saleIsActive == true, 'Sale is over');
    require (totalSupply() + 3 < MAX_BOTEROS, 'Cant mint three boteros');
    require (msg.value >= tripletPrice, '3 botero costs 0.24 ether');

    _mintBotero(3, msg.sender);
  }

  function mintFiveBotero() external payable {
    require (saleIsActive == true, 'Sale is over');
    require (totalSupply() + 5 < MAX_BOTEROS, 'Cant mint five boteros');
    require (msg.value >= quintoPrice, '5 botero costs 0.4 ether');

    _mintBotero(5, msg.sender);
  }

  function withdraw() public {
      uint balance = address(this).balance;
      payable(owner()).transfer(balance);
  }

  function endSale() external onlyOwner {
    require(saleIsActive == true, 'Sale has endend');
    saleIsActive = false;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
      require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

      string memory baseURI = _baseURI();
      return bytes(IPFS_CIDs[tokenId]).length > 0 ? string(abi.encodePacked(baseURI, IPFS_CIDs[tokenId])) : "";
  }


  function setTokenCID(uint256 tokenIds, string memory tokenCIDs) public onlyOwner{

      IPFS_CIDs[tokenIds] = tokenCIDs;

  }

  function setTokenCIDs(uint[] memory tokenIds, string[] memory tokenCIDs) public onlyOwner{
      require(tokenIds.length <= 100, "Limit 100 tokenIds");
      for(uint i = 0; i < tokenIds.length; i++){
          IPFS_CIDs[tokenIds[i]] = tokenCIDs[i];
      }
  }

}
