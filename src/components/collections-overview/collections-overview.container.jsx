import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import withSpinner from '../with-spinner/with-spinner.component'
import collectionsOverview from './collections-overview.components'
import WithSpinner from '../with-spinner/with-spinner.component'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading:  selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview)

export default CollectionsOverviewContainer